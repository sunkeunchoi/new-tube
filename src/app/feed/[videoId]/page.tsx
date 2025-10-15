interface PageProps {
    params: {videoId: string};
}
const Page = async ({ params }:PageProps) => {
    const {videoId } = await params
  return <div>Video Id: {videoId}</div>;
};
export default Page;
