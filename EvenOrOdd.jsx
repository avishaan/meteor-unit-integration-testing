EvenOrOdd = React.createClass({
  propTypes: {
    number: React.PropTypes.number.isRequired
  },
  isEven(num) {
    return num % 2 === 0;
  },
  render() {
    var number = this.props.number;
    var suffix = (this.isEven(number)) ? 'Even': 'Odd';
    return (
      <div className='EvenOrOdd'>
        {number} is {suffix}
      </div>
    );
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<EvenOrOdd />, document.getElementById('app'));
  });
}
