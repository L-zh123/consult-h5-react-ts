import { styled } from 'styled-components'

export const UserWrapper = styled.div`
  height: 100%;
  background-color: #f6f7f9;
  .user-page {
    background-color: var(--cp-bg);
    min-height: calc(100vh - 50px);
    padding: 0 15px 65px;
    // 头部
    &-head {
      height: 200px;
      background: linear-gradient(
        180deg,
        rgba(44, 181, 165, 0.46),
        rgba(44, 181, 165, 0)
      );
      margin: 0 -15px;
      padding: 0 15px;
      .top {
        display: flex;
        padding-top: 50px;
        align-items: center;
        .avator {
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
        .name {
          padding-left: 10px;
          p {
            &:first-child {
              font-size: 18px;
              font-weight: 500;
            }
            &:last-child {
              margin-top: 10px;
              color: var(--cp-primary);
              font-size: 16px;
            }
          }
        }
      }
      .grid {
        margin: 0 -15px;
        padding-top: 15px;
        p {
          text-align: center;
          &:first-child {
            font-size: 18px;
            font-weight: 500;
          }
          &:last-child {
            color: var(--cp-dark);
            font-size: 12px;
            padding-top: 4px;
          }
        }
      }
    }
    // 订单
    &-order {
      background-color: #fff;
      border-radius: 8px;
      margin-bottom: 15px;
      padding-bottom: 15px;
      .head {
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        align-items: center;
        padding: 0 15px;
        p {
          display: flex;
          align-items: center;
          a {
            color: var(--cp-tip);
          }
        }
      }
      .grid {
        text-align: center;
        p {
          font-size: 12px;
          padding-top: 4px;
        }
      }
    }
    // 分组
    &-group {
      background-color: #fff;
      border-radius: 8px;
      overflow: hidden;
      .badge {
        display: flex;
        align-items: center;
        span {
          padding-left: 10px;
          color: #000;
        }
      }
      h3 {
        padding-left: 16px;
        line-height: 44px;
      }
    }
    .logout {
      display: block;
      margin: 20px auto;
      width: 100px;
      text-align: center;
      color: var(--cp-price);
    }
  }
`
// 家庭档案页面的样式
export const PatientWrapper = styled.div`
  .patient-page {
    padding: 45px 0 80px;
  }
  .patient-change {
    padding: 15px;
    > h3 {
      font-weight: normal;
      margin-bottom: 5px;
    }
    > p {
      color: var(--cp-text3);
    }
  }
  .patient-next {
    padding: 15px;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
  }
  .patient-list {
    padding: 15px;
  }
  .patient-item {
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: var(--cp-bg);
    border-radius: 8px;
    margin-bottom: 15px;
    position: relative;
    border: 1px solid var(--cp-bg);
    transition: all 0.3s;
    overflow: hidden;
    .info {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      span {
        color: var(--cp-tip);
        margin-right: 20px;
        line-height: 30px;
        &.name {
          font-size: 16px;
          color: var(--cp-text1);
          width: 80px;
          margin-right: 0;
        }
        &.id {
          color: var(--cp-text2);
          width: 180px;
        }
      }
    }
    .icon {
      color: var(--cp-tag);
      width: 20px;
      text-align: center;
    }
    .tag {
      position: absolute;
      right: 60px;
      top: 21px;
      width: 30px;
      height: 16px;
      font-size: 10px;
      color: #fff;
      background-color: var(--cp-primary);
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.selected {
      border-color: var(--cp-primary);
      background-color: var(--cp-plain);
      .icon {
        color: var(--cp-primary);
      }
    }
  }
  .patient-add {
    background-color: var(--cp-bg);
    color: var(--cp-primary);
    text-align: center;
    padding: 15px 0;
    border-radius: 8px;
    .cp-icon {
      font-size: 24px;
    }
  }
  .patient-tip {
    color: var(--cp-tag);
    padding: 12px 0;
  }
`
