import { Chip } from '@material-ui/core';
import { IBuildInfov2 } from '../../models';

export const TagGroup = (props: { build: IBuildInfov2 }) => {
  const { build } = props;
  return (
    <div className="chips">
      {build.specializations.map((v) => (
        <Chip label={v} key={v} />
      ))}
      {build.hasGuardian && <Chip label="Guardian" key="guardian" />}
      {build.hasPowerplay && <Chip label="PowerPlay" key="powerplay" />}
      {build.isBeginner && <Chip label="Beginner" key="beginner" />}
    </div>
  );
};
