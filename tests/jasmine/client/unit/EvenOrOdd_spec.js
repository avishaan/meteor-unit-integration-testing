describe("EvenOrOdd", function(){
  var defProps, renderWithProps, component, el, $el;

  beforeEach(function(){
    defProps = {
      number: 2
    };
    renderWithProps = function(props){
      component = renderComponent(EvenOrOdd, props);
      el = React.findDOMNode(component);
      $el = $(el);
    };
  });

  it("should contain Hello World", function() {
    renderWithProps(defProps);
    expect($el.text()).toEqual('Hello World');
  });

});
