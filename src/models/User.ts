import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
// import type { Otp, OtpCreationAttributes, OtpId } from './Otp';
// import type { UserBalance, UserBalanceId } from './UserBalance';
// import type { UserLog, UserLogId } from './UserLog';
// import type { UserWallet, UserWalletId } from './UserWallet';
// import type { Workspace, WorkspaceId } from './Workspace';

export interface UserAttributes {
  id: number;
  email: string;
  password: string;
  number?: string;
  '2Fa'?: string;
  status?: 'deactive' | 'active' | 'banned';
  activeToken?: string;
  lastLoginAt: number;
  expiredVipAt?: number;
  createdAt: number;
  updatedAt?: number;
}

export type UserPk = 'id';
export type UserId = User[UserPk];
export type UserOptionalAttributes =
  | 'id'
  | 'number'
  | '2Fa'
  | 'status'
  | 'activeToken'
  | 'expiredVipAt'
  | 'updatedAt';
export type UserCreationAttributes = Optional<
  UserAttributes,
  UserOptionalAttributes
>;

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  id!: number;
  email!: string;
  password!: string;
  number?: string;
  '2Fa'?: string;
  status?: 'deactive' | 'active' | 'banned';
  activeToken?: string;
  lastLoginAt!: number;
  expiredVipAt?: number;
  createdAt!: number;
  updatedAt?: number;

  // User hasOne Otp via userId
  // otp!: Otp;
  // getOtp!: Sequelize.HasOneGetAssociationMixin<Otp>;
  // setOtp!: Sequelize.HasOneSetAssociationMixin<Otp, OtpId>;
  // createOtp!: Sequelize.HasOneCreateAssociationMixin<Otp>;
  // // User hasMany UserBalance via userId
  // userBalances!: UserBalance[];
  // getUserBalances!: Sequelize.HasManyGetAssociationsMixin<UserBalance>;
  // setUserBalances!: Sequelize.HasManySetAssociationsMixin<
  //   UserBalance,
  //   UserBalanceId
  // >;
  // addUserBalance!: Sequelize.HasManyAddAssociationMixin<
  //   UserBalance,
  //   UserBalanceId
  // >;
  // addUserBalances!: Sequelize.HasManyAddAssociationsMixin<
  //   UserBalance,
  //   UserBalanceId
  // >;
  // createUserBalance!: Sequelize.HasManyCreateAssociationMixin<UserBalance>;
  // removeUserBalance!: Sequelize.HasManyRemoveAssociationMixin<
  //   UserBalance,
  //   UserBalanceId
  // >;
  // removeUserBalances!: Sequelize.HasManyRemoveAssociationsMixin<
  //   UserBalance,
  //   UserBalanceId
  // >;
  // hasUserBalance!: Sequelize.HasManyHasAssociationMixin<
  //   UserBalance,
  //   UserBalanceId
  // >;
  // hasUserBalances!: Sequelize.HasManyHasAssociationsMixin<
  //   UserBalance,
  //   UserBalanceId
  // >;
  // countUserBalances!: Sequelize.HasManyCountAssociationsMixin;
  // // User hasMany UserLog via userId
  // userLogs!: UserLog[];
  // getUserLogs!: Sequelize.HasManyGetAssociationsMixin<UserLog>;
  // setUserLogs!: Sequelize.HasManySetAssociationsMixin<UserLog, UserLogId>;
  // addUserLog!: Sequelize.HasManyAddAssociationMixin<UserLog, UserLogId>;
  // addUserLogs!: Sequelize.HasManyAddAssociationsMixin<UserLog, UserLogId>;
  // createUserLog!: Sequelize.HasManyCreateAssociationMixin<UserLog>;
  // removeUserLog!: Sequelize.HasManyRemoveAssociationMixin<UserLog, UserLogId>;
  // removeUserLogs!: Sequelize.HasManyRemoveAssociationsMixin<UserLog, UserLogId>;
  // hasUserLog!: Sequelize.HasManyHasAssociationMixin<UserLog, UserLogId>;
  // hasUserLogs!: Sequelize.HasManyHasAssociationsMixin<UserLog, UserLogId>;
  // countUserLogs!: Sequelize.HasManyCountAssociationsMixin;
  // // User hasMany UserWallet via userId
  // userWallets!: UserWallet[];
  // getUserWallets!: Sequelize.HasManyGetAssociationsMixin<UserWallet>;
  // setUserWallets!: Sequelize.HasManySetAssociationsMixin<
  //   UserWallet,
  //   UserWalletId
  // >;
  // addUserWallet!: Sequelize.HasManyAddAssociationMixin<
  //   UserWallet,
  //   UserWalletId
  // >;
  // addUserWallets!: Sequelize.HasManyAddAssociationsMixin<
  //   UserWallet,
  //   UserWalletId
  // >;
  // createUserWallet!: Sequelize.HasManyCreateAssociationMixin<UserWallet>;
  // removeUserWallet!: Sequelize.HasManyRemoveAssociationMixin<
  //   UserWallet,
  //   UserWalletId
  // >;
  // removeUserWallets!: Sequelize.HasManyRemoveAssociationsMixin<
  //   UserWallet,
  //   UserWalletId
  // >;
  // hasUserWallet!: Sequelize.HasManyHasAssociationMixin<
  //   UserWallet,
  //   UserWalletId
  // >;
  // hasUserWallets!: Sequelize.HasManyHasAssociationsMixin<
  //   UserWallet,
  //   UserWalletId
  // >;
  // countUserWallets!: Sequelize.HasManyCountAssociationsMixin;
  // // User hasMany Workspace via userId
  // workspaces!: Workspace[];
  // getWorkspaces!: Sequelize.HasManyGetAssociationsMixin<Workspace>;
  // setWorkspaces!: Sequelize.HasManySetAssociationsMixin<Workspace, WorkspaceId>;
  // addWorkspace!: Sequelize.HasManyAddAssociationMixin<Workspace, WorkspaceId>;
  // addWorkspaces!: Sequelize.HasManyAddAssociationsMixin<Workspace, WorkspaceId>;
  // createWorkspace!: Sequelize.HasManyCreateAssociationMixin<Workspace>;
  // removeWorkspace!: Sequelize.HasManyRemoveAssociationMixin<
  //   Workspace,
  //   WorkspaceId
  // >;
  // removeWorkspaces!: Sequelize.HasManyRemoveAssociationsMixin<
  //   Workspace,
  //   WorkspaceId
  // >;
  // hasWorkspace!: Sequelize.HasManyHasAssociationMixin<Workspace, WorkspaceId>;
  // hasWorkspaces!: Sequelize.HasManyHasAssociationsMixin<Workspace, WorkspaceId>;
  // countWorkspaces!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof User {
    return User.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING(200),
          allowNull: false,
          unique: 'user_email',
        },
        password: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        number: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        '2Fa': {
          type: DataTypes.STRING(100),
          allowNull: true,
          field: '2fa',
        },
        status: {
          type: DataTypes.ENUM('deactive', 'active', 'banned'),
          allowNull: true,
          defaultValue: 'deactive',
        },
        activeToken: {
          type: DataTypes.STRING(1000),
          allowNull: true,
          field: 'active_token',
        },
        lastLoginAt: {
          type: DataTypes.BIGINT,
          allowNull: false,
          field: 'last_login_at',
        },
        expiredVipAt: {
          type: DataTypes.BIGINT,
          allowNull: true,
          field: 'expired_vip_at',
        },
        createdAt: {
          type: DataTypes.BIGINT,
          allowNull: false,
          field: 'created_at',
        },
        updatedAt: {
          type: DataTypes.BIGINT,
          allowNull: true,
          field: 'updated_at',
        },
      },
      {
        sequelize,
        tableName: 'users',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
          },
          {
            name: 'user_email',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'email' }],
          },
        ],
      },
    );
  }
}
