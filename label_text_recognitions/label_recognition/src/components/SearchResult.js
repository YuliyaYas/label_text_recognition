import React from 'react';


const SearchResult = (props) => {
return(
  <div>
  <div>
    <div className="">
      <div className="ui segment">
      <div><a href={props.result.link} className="blue-link" target="_blank">{props.result.title}</a></div>
      <div><a href={props.result.link} className="green-link" target="_blank">{props.result.link}</a></div>
      {props.result.htmlSnippet.replace(/<b>|<br>|<|b>|&amp;|&|#|39;|.\/|s_0|\//gi, "")}
      </div>
    </div>
  </div>
  </div>
)
}

export default SearchResult
