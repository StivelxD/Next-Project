import Head from "next/head";
import Container from "../components/container";
import fetch from "isomorphic-fetch";
import Users from "../components/user";

const Index = (props) => {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Next - Home</title>
      </Head>
      <Container>
        <h1>Next</h1>
        <Users users={props.users} />
      </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return { users: resJSON.data };
};

export default Index;
