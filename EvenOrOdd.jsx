EvenOrOdd = React.createClass({
  render() {
    return (
      <div className='EvenOrOdd'>
        Hello World
      </div>
    );
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<EvenOrOdd />, document.getElementById('app'));
  });
}
