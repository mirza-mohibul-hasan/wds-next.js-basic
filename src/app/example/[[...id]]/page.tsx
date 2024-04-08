const page = ({ params }: { params: { id: any } }) => {
  console.log(params.id);
  return <div>ID ares {params?.id?.join(", ")}</div>;
};

export default page;
