import {Panel} from "rsuite"
import PropTypes from 'prop-types';



const Card3 = ({Image}) => (
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width:350 }}>
      <img src={Image} height="240"/>
      {/* <Panel header={name}>
        <p>
          <small>
          {content}
          </small>
        </p>
        <button id='butn'>{buttt}</button>
      </Panel> */}
    </Panel>
  );
  Card3.propTypes={
    // name:PropTypes.string.isRequired,
    Image:PropTypes.string.isRequired,
    // content:PropTypes.string.isRequired,
    // buttt:PropTypes.string.isRequired
  }
  export default Card3;