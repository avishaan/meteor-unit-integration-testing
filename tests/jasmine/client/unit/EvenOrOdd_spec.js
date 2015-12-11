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
  it("should determine if number is odd or even", function(){
    // could call the proto without rendering the component
    expect(EvenOrOdd.prototype.isEven(3)).toBe(false);
    renderWithProps({});
    expect(component.isEven(0)).toBe(true);
    expect(component.isEven(4)).toBe(true);
  });

  it("should print out odd", function(){
    renderWithProps({number: 5});
    expect($el.text()).toBe("5 is Odd");
  });

  it("should print out even", function(){
    renderWithProps({number: 4});
    expect($el.text()).toBe("4 is Even");
  });
});
