import React from 'react'

export default function FullButton(props) {
    console.log(props);
    return (
        <div className='d-grid gap-3 mb-4'>{props.children}</div>
)
}
