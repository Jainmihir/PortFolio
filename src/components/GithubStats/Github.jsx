import { useEffect, useState } from "react";
import { fetchContributions } from "../../utils/fetchers/github";
import { SubSectionContainer } from "../shared/Container/Container";
import LinkToNewTab from "../shared/LinkToNewTab/LinkToNewTab";
import Spinner from "../shared/Spinner/Spinner";
import Graph from "./Graph";

const Github = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);
    const TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
    const fetchData = async () => {
        setLoading(true);
        // const apiData = await axios.get("/api/github-contributions");
        const apiData = await fetchContributions('Jainmihir', TOKEN || "");
        setData(apiData);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <Spinner text='Fetching Github Stats' />;

    return (
        <>
            <SubSectionContainer>
                <h2>
                    I ❤️ developing. On {" "}
                    <LinkToNewTab href='https://github.com/Jainmihir' withIcon style={{ color: 'var(--text-color) !important', textDecoration: 'none' }}>
                        Github
                    </LinkToNewTab>
                </h2>
                <p>
                    I have made a total of <span>{data?.totalContributions}</span>{" "}
                    contributions in{" "}
                    <span>
                        {(data?.contributedTo || 0) + (data?.noOfRepositories || 0)}
                    </span>{" "}
                    repos till now, in which I have
                </p>
                <ul>
                    <li>
                        <span>{data?.commits}</span> commits in{" "}
                        <span>{data?.commitRepos}</span> repos
                    </li>
                    {/* <li>
                        <span>{data?.pullRequests}</span> Pull Requests in{" "}
                        <span>{data?.pullRequestRepos}</span> repos
                    </li>
                    <li>
                        <span>{data?.pullRequestReviews}</span> code reviews in{" "}
                        <span>{data?.reviewRepos}</span> repos
                    </li>
                    <li>
                        raised <span>{data?.issues}</span> issues in{" "}
                        <span>{data?.issueRepos}</span> repos
                    </li> */}
                    <li>
                        and created <span>{data?.noOfRepositories}</span> repositories of my
                        own
                    </li>
                </ul>

            </SubSectionContainer>
            <Graph userData={data} />
        </>
    );
};

export default Github;
