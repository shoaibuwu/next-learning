const page = ({ params }) => {
  return (
    <div>
      <h1>Heading log</h1>
      {params.id}
      <p>Boud of the blog</p>
    </div>
  );
};

export default page;
