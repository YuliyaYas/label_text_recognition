import React from 'react';

const About = () => {
  return(
    <div>
    <div className="ui segment-1">
      <h3 className="ui left floated header">How to use the app?</h3>
      <div className="ui clearing divider"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at luctus tellus, vitae pulvinar dui. Nullam id leo metus. Vestibulum sed sollicitudin elit. Nullam interdum commodo blandit. Sed iaculis, urna sit amet ultrices placerat, dui nisi consequat nibh, non auctor erat lacus ac ligula.
      </p>
      <h3 className="ui left floated header">What does the app do?</h3>
      <div className="ui clearing divider"></div>
      <p>bProin viverra dui ipsum, ut molestie tortor scelerisque ac. Donec at luctus arcu. Ut ultricies neque purus, non posuere ipsum elementum id. Aliquam tincidunt augue et tincidunt auctor.
      </p>
      <h3 className="ui left floated header">More info</h3>
      <div className="ui clearing divider"></div>
      <p>Integer consequat lorem purus, a pellentesque eros suscipit vel. Sed finibus ex at ornare tristique. Vestibulum at magna eu massa pellentesque tristique ac tristique erat. Integer ac arcu magna. Nunc auctor, turpis sed tempus egestas, risus metus posuere mauris, eu vehicula arcu felis porta massa.
      Duis pharetra mauris id varius mattis.
      </p>
      </div>
      <div className="ui inverted vertical footer segment">
        <div className="ui center aligned container">
        <div className="ui two column grid">
            <div className="column">
            <a href={`/y/images`} className="circular ui large icon blue basic button">
              <i className="grid layout icon"></i>
            </a>
            </div>
            <div className="column">
            <a href="/y"className="circular ui large icon blue basic button">
              <i className="camera retro icon"></i>
            </a>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;
