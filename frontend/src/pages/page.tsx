import React from 'react';
import { useQuery, gql } from '@apollo/client';

interface homeProps {}

export const Home: React.FC<homeProps> = ({}) => {
    const {data} = useQuery(gql`
        query {
            hello
        }
    `);
    return <div>{data?.hello}</div>;
};
