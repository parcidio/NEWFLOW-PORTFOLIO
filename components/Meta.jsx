// IMPORT
import Head from "next/head"; //inporting the head componet so that we may define the site meta data

const Meta = () => {
  return (
    <Head>
      <title>Parcidio Andre</title>
      <meta lang="eng" />
      <meta
        name="description"
        content="Parcidio Andre is software developer espicialising on simple and intuitive design"
      />
      <meta
        name="keyWords"
        content="Parcidio Andre, software developer, simples and intuitive design"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
