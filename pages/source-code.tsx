import { NextPage, GetStaticProps } from "next";
import axios from "axios";

import WindowLayout from "../components/WindowLayout";
import { SourceCodeCommit } from "../types/WindowContextTypes";

type Props = {
	sourceCodeCommits: SourceCodeCommit[]
};

const SourceCode: NextPage<Props> = ({ sourceCodeCommits }) => {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-5 bg-zinc-900">
			<WindowLayout sourceCodeCommits={sourceCodeCommits}>
				<h1></h1>
			</WindowLayout>
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const commits = await axios.get<SourceCodeCommit[]>("https://api.github.com/repos/GuickerZ/GuickerZ/commits");

	return {
		props: {
			sourceCodeCommits: commits.data
		}
	};
};

export default SourceCode;