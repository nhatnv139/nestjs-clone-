import type { Sequelize } from 'sequelize';
import { User as _User } from './User';
import type { UserAttributes, UserCreationAttributes } from './User';

export { _User as User };

export type { UserAttributes, UserCreationAttributes };

export function initModels(sequelize: Sequelize) {
  const User = _User.initModel(sequelize);
  // User.hasOne(Otp, { as: 'otp', foreignKey: 'userId' });
  // User.hasMany(UserBalance, { as: 'userBalances', foreignKey: 'userId' });
  // User.hasMany(UserLog, { as: 'userLogs', foreignKey: 'userId' });
  // User.hasMany(UserWallet, { as: 'userWallets', foreignKey: 'userId' });
  // User.hasMany(Workspace, { as: 'workspaces', foreignKey: 'userId' });

  return {
    User: User,
  };
}
