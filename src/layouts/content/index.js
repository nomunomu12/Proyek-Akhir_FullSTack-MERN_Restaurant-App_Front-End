const LayoutContent = (props) => {
  const { headerElement, sectionElement } = props;
  const Container = (props) => {
    return <div className="w-full flex flex-col gap-3">{props.children}</div>;
  };

  const Header = (props) => {
    return (
      <div className="w-full h-20 bg-white rounded shadow-lg">
        {props.children}
      </div>
    );
  };
  const Section = (props) => {
    return (
      <div className="w-full customHeight600px p-4 overflow-hidden bg-white rounded shadow-lg">
        {props.children}
      </div>
    );
  };

  return (
    <Container>
      <Header>{headerElement}</Header>
      <Section>{sectionElement}</Section>
    </Container>
  );
};

export default LayoutContent;
