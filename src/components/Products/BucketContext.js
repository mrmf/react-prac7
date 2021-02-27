import React, {useState } from 'react'

export const BucketContext = React.createContext();

export const BucketProvider = (props) => {
const [bucket, setBucket] = useState(0);

return (
    <BucketContext.Provider value={[bucket, setBucket]}>
        {props.children}
    </BucketContext.Provider>
)
}