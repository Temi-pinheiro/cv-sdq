import React from 'react';
import data from '../../../data/data.json';
import Case from '~/components/Case';
export function generateMetadata({ params }) {
  return { title: params.id };
}
export default function Page({ params }) {
  const { id } = params;
  const { cases } = data;
  const theCase = cases.find((c) => c.title == id.replaceAll('%20', ' '));
  const indexOfCase = cases.indexOf(theCase);
  const getNextCase = () => {
    if (indexOfCase == cases.length - 1) return;
    const nextCase = cases[indexOfCase + 1];
    return {
      title: nextCase.title,
      cover: `/${nextCase.basePath}/${nextCase.cover}`,
    };
  };
  const getPrevCase = () => {
    if (indexOfCase == 0) return;
    const prevCase = cases[indexOfCase - 1];
    return {
      title: prevCase.title,
      cover: `/${prevCase.basePath}/${prevCase.cover}`,
    };
  };
  return (
    <div>
      <Case
        caseInfo={theCase}
        nextCase={getNextCase()}
        prevCase={getPrevCase()}
      />
    </div>
  );
}
