import React from "react";
import "./style.css";
import { SubBlock, CircleBlock } from "@/components/layout_components";
import { PrimaryButton, SecondaryButton } from "@ui";
import defaultHead from "@/asset/default_head.png";
import { LoginContext } from "@/Contexts";
import TopicController from "@controller/topic_controller";
import { notificationShow } from "@controller/dialog_controller";
/**
 * Display basic information for a topic.
 * @param {*} props
 */
const TopicInfo = props => (
  <div>
    <SubBlock
      className="TopicInfo"
      style={{ background: global.theme.base_color }}
    >
      <div
        className="top inner"
        style={{ background: global.theme.primary_color }}
      >
        <CircleBlock
          className="topic_head"
          radiu="35"
          style={{ background: global.theme.base_color }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={props.topic.avater ? props.topic.avater : defaultHead}
          />
        </CircleBlock>
      </div>

      <div className="middle inner">
        <p
          className="topic_title"
          style={{ color: global.theme.primary_color }}
        >
          {props.topic.title}
        </p>
        <p className="topic_description">{props.topic.description}</p>

        <div className="follow_info pair_row">
          <div className="pair_part">
            {props.topic.member_num}
            <br />
            Members
          </div>
          <div className="pair_part">
            {props.topic.post_num}
            <br />
            Posts
          </div>
        </div>
      </div>
      <div className="bottom inner">
        <LoginContext.Consumer>
          {value =>
            value.login && value.my_info ? (
              value.my_info.topics.indexOf(props.topic.title) != -1 ? (
                <SecondaryButton
                  style={{ width: "100%" }}
                  onClick={() =>
                    TopicController.unfollowTopic(props.topic.title)
                  }
                >
                  SUBSCRIBED
                </SecondaryButton>
              ) : (
                <PrimaryButton
                  style={{ width: "100%" }}
                  onClick={() => TopicController.followTopic(props.topic.title)}
                >
                  SUBSCRIBE
                </PrimaryButton>
              )
            ) : (
              <PrimaryButton
                style={{ width: "100%" }}
                onClick={() => notificationShow("Please Login", "warn")}
              >
                SUBSCRIBE
              </PrimaryButton>
            )
          }
        </LoginContext.Consumer>
        {props.children}
      </div>
    </SubBlock>
    <SubBlock style={{ background: global.theme.base_color, padding: "10px" }}>
      <div className="topic_managers">
        <p style={{ color: global.theme.primary_color }}>Managers</p>
        <ul>
          {props.topic.managers.map(manager => {
            return (
              <li
                key={manager._id}
                style={{ color: global.theme.secondary_color }}
              >
                {manager.name}
              </li>
            );
          })}
        </ul>
      </div>
    </SubBlock>
    <SubBlock>
      <div
        className="topic_tags"
        style={{ background: global.theme.base_color, padding: "10px" }}
      >
        {props.topic.tags.map(tag => {
          return (
            <li key={tag} style={{ color: global.theme.secondary_color }}>
              {tag}
            </li>
          );
        })}
      </div>
    </SubBlock>
  </div>
);
export default TopicInfo;
