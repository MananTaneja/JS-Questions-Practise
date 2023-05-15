import { useEffect, useState } from 'react';

interface InfiniteScrollableProps {
    renderItem: (item: string) => JSX.Element;
    getData: Function;
    listData: Array<any>;
}

const InfiniteScrollable = (props: InfiniteScrollableProps) => {
    
    useEffect(() => {
        
    })


    return (
        <ul>

        </ul>
    );
}
 
export default InfiniteScrollable;