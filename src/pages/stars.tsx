import * as React from 'react';
import { useState } from 'react';
import fb from '../firebase';

const Index = () => {
    const [data, setData] = useState<any[]>([]);
    
    if (data.length < 1) {
        fb.all('star').then(result => {
            result.forEach((doc) => setData([ ...data, { id: doc.id, info: doc.data() }] ));
        });
    }

    return (<>
        <p>STARs:</p>
        {!data && <p>Loading...</p>}
        {data.map(({ id, info }) => <p key={id}>Name: {info.name}</p>)}
    </>);
}

export default Index;
