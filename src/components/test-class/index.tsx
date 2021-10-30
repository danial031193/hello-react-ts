import React, { PureComponent, createRef } from 'react';

interface ITestAbstractState {
  summ: number;
}

export class TestAbstract extends PureComponent<any, ITestAbstractState> {
  a = 1;

  b = 2;

  containerRef = createRef<HTMLDivElement>();

  state: ITestAbstractState = {
    summ: 0,
  };

  componentDidMount() {
    console.log(this.containerRef);
  }

  test = () => {
    const { summ } = this.state;
    this.setState({ summ: summ + 10 });
  };

  setSumm = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log({ e });
    this.setState(
      (prevProps) => ({ summ: prevProps.summ + this.a + this.b }),
      () => this.test(),
    );
  };

  render() {
    const { summ } = this.state;

    return (
      <div ref={this.containerRef} data-id="id" onClick={this.setSumm}>
        summ: {summ}
      </div>
    );
  }
}

export class TestClass extends TestAbstract {
  setSumm = () => {
    this.setState({ summ: this.a + this.b + 5 });
  };
}
