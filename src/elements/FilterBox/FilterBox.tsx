import * as React from 'react';
import styles from  './FilterBox.module.scss';


export interface IFilterBoxProps  {
    name: string,
    icon: string,
    onClick: () => void
}

export const FilterBox = ( props: IFilterBoxProps) => {
    return (
        <div className={styles['filter-card']}>

        </div>
    )
}