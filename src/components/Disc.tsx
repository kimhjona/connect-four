import * as React from "react";

interface DiscProps {
  gameDisk: string;
}

export class Disc extends React.Component<DiscProps> {
  public render() {
    const { gameDisk } = this.props;

    return (
      <>
        <div className={`${"disc " + gameDisk}`} />
      </>
    );
  }
}
