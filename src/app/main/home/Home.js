import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FusePageSimple, DemoContent } from "@fuse";

const styles = theme => ({
  layoutRoot: {}
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <FusePageSimple
        classes={{
          root: classes.layoutRoot
        }}
        header={
          <div className="p-24">
            <h4>Industrias Martinez</h4>
          </div>
        }
        contentToolbar={
          <div className="px-24">
            <h4>Toolbar</h4>
          </div>
        }
        content={
          <div className="p-24">
            <h4>Content</h4>
          </div>
        }
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
