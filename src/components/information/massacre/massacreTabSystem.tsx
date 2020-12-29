import { AppBar, Tab, Tabs, Typography, Fade } from '@material-ui/core';
import { MassacreContext } from 'providers/massacreTrackerProvider';
import { ChangeEvent, useContext } from 'react';
import { MassacreTabAddPanel } from './massacreTabAddPanel';
import { MassacreTabPanel } from './massacreTabPanel';

export const MassacreTabSystem = () => {
  const context = useContext(MassacreContext);

  const handleTabChange = (_: ChangeEvent<{}>, newValue: string) => {
    context?.setSelectedTab(newValue);
  };

  if (context === null) {
    return <Typography>Unable to retrieve context</Typography>;
  } else {
    return (
      <div className="root">
        <AppBar position="static" color="default">
          <Tabs value={context.selectedTab ?? 0} onChange={handleTabChange}>
            {context.trackers.map((tracker) => (
              <Tab
                key={tracker.hazRezSystem}
                label={tracker.hazRezSystem}
                value={tracker.hazRezSystem}
              />
            ))}
            <Tab label="+" value="+" />
          </Tabs>
        </AppBar>
        {context.trackers.map((tracker) => (
          <Fade
            in={tracker.hazRezSystem === context.selectedTab}
            key={tracker.hazRezSystem}
          >
            <div>
              <MassacreTabPanel system={tracker.hazRezSystem} />
            </div>
          </Fade>
        ))}
        <Fade in={context.selectedTab === '+'}>
          <div>
            <MassacreTabAddPanel />
          </div>
        </Fade>
      </div>
    );
  }
};
