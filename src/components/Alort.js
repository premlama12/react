import React from 'react'

export default function Alort(props) {
  const capitalize=(word)=>{
      const lower=word.toLowerCase();
      return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
        props.alort && <div className={`alert alert-${props.alort.type} text-$ alert-dismissible fade show role="alert"`}>
          <strong>{capitalize(props.alort.type)}</strong>:{props.alort.msg}
        </div>
  )
}