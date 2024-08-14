import { useEffect, useRef, useState } from 'react';

interface InfiniteScrollableProps {
    renderItem: (item: string, index: number) => JSX.Element;
    getData: (query: string, pageNumber: number) => Promise<void>;
    listData: Array<any>;
    searchQuery: string;
}

const InfiniteScrollable = ({ renderItem, getData, listData, searchQuery }: InfiniteScrollableProps) => {

    const pageNumber = useRef<number>(1)
    const [loading, setLoading] = useState<boolean>(false)


    useEffect(() => {
        setLoading(true)
        getData(searchQuery, pageNumber.current).finally(() => { setLoading(false) })
    }, [searchQuery])

    return (
        <ul>
            {listData.map((item, index) => (
                renderItem(item, index)
            ))}
            {loading && <p>Loading...</p>}
        </ul>
    );
}

export default InfiniteScrollable;