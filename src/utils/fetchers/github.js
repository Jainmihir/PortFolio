import axios from "axios";
// import { contributionQuery } from "../queries";

const contributionQuery = (username) => {
    return {
        query: `
          query userInfo($LOGIN: String!) {
           user(login: $LOGIN) {
             name
             repositories(first: 100, orderBy: {direction: DESC, field: STARGAZERS}) {
               totalCount
               nodes {
                  stargazers {
                    totalCount
                  }
                }
             }
             repositoriesContributedTo {
               totalCount
             }
             contributionsCollection {
               totalIssueContributions
               totalPullRequestContributions
               totalCommitContributions
               restrictedContributionsCount
               totalPullRequestReviewContributions
               totalRepositoriesWithContributedCommits
               totalRepositoriesWithContributedIssues
               totalRepositoriesWithContributedPullRequestReviews
               totalRepositoriesWithContributedPullRequests
               totalRepositoryContributions
               contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                    }
                  }
                }
              }
            }
          },
        `,
        variables: {
            LOGIN: username,
        },
    };
}

export const fetchContributions = async(username, token) => {


    try {

        // const apiResponse = await fetch(contributionQuery(username), token);
        const apiResponse = await axios.post(`https://api.github.com/graphql`, contributionQuery(username), {
            headers: {
                Authorization: `bearer ${token}`
            }
        });
        const User = apiResponse.data.data.user;
        if (User === null)
            return `Can't fetch any contribution. Please check your username.`;

        let userData = {
            totalContributions: User.contributionsCollection.contributionCalendar.totalContributions,
            contributions: [],
            name: User.name,
            noOfRepositories: User.repositories.totalCount,
            commitRepos: User.contributionsCollection.totalRepositoriesWithContributedCommits,
            commits: User.contributionsCollection.totalCommitContributions,
            issueRepos: User.contributionsCollection.totalRepositoriesWithContributedIssues,
            issues: User.contributionsCollection.totalIssueContributions,
            pullRequestRepos: User.contributionsCollection
                .totalRepositoriesWithContributedPullRequests,
            pullRequests: User.contributionsCollection.totalPullRequestContributions,
            reviewRepos: User.contributionsCollection
                .totalRepositoriesWithContributedPullRequestReviews,
            pullRequestReviews: User.contributionsCollection.totalPullRequestReviewContributions,
            stars: 0,
            contributedTo: User.repositoriesContributedTo.totalCount,
        };

        const weeks = User.contributionsCollection.contributionCalendar.weeks;
        weeks
            .slice(weeks.length - 6, weeks.length)
            .map((week) =>
                week.contributionDays.map((contributionCount) =>
                    userData.contributions.push(contributionCount.contributionCount)
                )
            );

        const presentDay = new Date().getDay();
        userData.contributions = userData.contributions.slice(
            5 + presentDay,
            36 + presentDay
        );

        const total = User.repositories.nodes.reduce(
            (a, d) => a + d.stargazers.totalCount,
            0
        );
        userData.stars = total;

        return userData;
    } catch (error) {
        console.log(error);
        return error;
    }
};