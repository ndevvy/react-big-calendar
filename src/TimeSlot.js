import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cn from 'classnames'
import { elementType } from './utils/propTypes'


export default class TimeSlot extends Component {
  static propTypes = {
    dayWrapperComponent: elementType,
    timeGutterComponent: elementType,
    value: PropTypes.instanceOf(Date).isRequired,
    isNow: PropTypes.bool,
    showLabel: PropTypes.bool,
    content: PropTypes.string,
    culture: PropTypes.string,
    slotPropGetter: PropTypes.func,
  }

  static defaultProps = {
    isNow: false,
    showLabel: false,
    content: ''
  }

  render() {
    const { value, slotPropGetter } = this.props;
    const Wrapper = this.props.dayWrapperComponent;
    const TimeGutterComponent = this.props.timeGutterComponent;
    const { className, style } = (slotPropGetter && slotPropGetter(value)) || {};

    return (
      <Wrapper value={value}>
        <div
          style={style}
          className={cn(
            'rbc-time-slot',
            className,
            this.props.showLabel && 'rbc-label',
            this.props.isNow && 'rbc-now',
          )}
        >
        {this.props.showLabel &&
            <TimeGutterComponent content={this.props.content} value={this.props.value}/>
        }
        </div>
      </Wrapper>
    )
  }
}
