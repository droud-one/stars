import { ReactNode } from 'react';

export type HasKidsProps = {
    children: ReactNode,
};

export type StarData = {
    id: string,
    action: string,
    favourite: boolean,
    name: string,
    result: string,
    situation: string,
    task: string,
    created_at: number,
    updated_at: number,
};