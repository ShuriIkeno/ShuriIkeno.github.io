import React from 'react';

export default function ErrorTestPage({ error }: { error: string }) {
  return (
    <div>
      <h1>Error Test</h1>
      <p>{error}</p>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { error } = context.query;

  return {
    props: {
      error: error || 'No error',
    },
  };
}
