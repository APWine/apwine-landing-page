import React from "react"

import CryptoIcon from "./CryptoIcon"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import classnames from "classnames"

import { FaFileContract, FaStar } from "react-icons/fa"
import { RiGovernmentFill } from "react-icons/ri"
import { AiOutlineRise } from "react-icons/ai"

const Milestone = ({ date, name, icon, done = false }) => (
  <VerticalTimelineElement
    visible
    contentStyle={{
      background: "rgb(23, 20, 42)",
      "md:box-shadow": done ? "0px 0px 48px rgba(91, 65, 245, 0.5)" : "none",
      "box-shadow": done ? "0px 0px 26px rgba(91, 65, 245, 0.5)" : "none",
      borderRadius: "0.75rem",
    }}
    textClassName={done ? "border border-primary-300 border-opacity-50" : ""}
    contentArrowStyle={
      done
        ? {
            "--tw-gradient-from": "#402CBB",
            "--tw-gradient-stops":
              "var(--tw-gradient-from), var(--tw-gradient-to, rgba(64, 44, 187, 0))",
            "--tw-gradient-to": "transparent",
          }
        : {
            "--tw-gradient-from": "#211B49",
            "--tw-gradient-stops":
              "var(--tw-gradient-from), var(--tw-gradient-to, rgba(33, 27, 73, 0))",
            "--tw-gradient-to": "transparent",
          }
    }
    iconStyle={{
      background: "rgb(23, 20, 42)",
      color: "#fff",
      "box-shadow": "none",
      borderColor: done ? "rgba(91, 65, 245, 0.5)" : "#211B49",
    }}
    iconClassName={classnames(
      "border-2 border-primary-100",
      !done && "svg-opacity-50"
    )}
    icon={icon}
  >
    <h3 className="text-lg font-bold text-white">{date}</h3>
    <h4 className="text-primary-100">{name}</h4>
  </VerticalTimelineElement>
)

const Roadmap = () => (
  <div className="">
    <div className="max-w-2xl mx-auto">
      <p className="mb-4 text-3xl font-bold text-center text-white">Roadmap</p>
      <p className="mb-8 text-center text-primary-100">
        This is the roadmap we expect to follow in 2021. Every change and
        decisions for the roadmap will be discussed in our{" "}
        <a
          href="https://gov.apwine.fi"
          className="font-bold transition duration-300 hover:text-primary-200"
          rel="noopener noreferrer"
          target="_blank"
        >
          governance forum
        </a>
        .
      </p>
    </div>
    <VerticalTimeline animate={false}>
      <Milestone
        date="October 2020"
        name="Alpha v1.0 Launch"
        icon={<FaStar />}
        done
      />
      <Milestone
        date="November 2020"
        name="Pre-Seed"
        icon={<CryptoIcon icon="apwine" />}
        done
      />
      <Milestone
        date="December 2020"
        name="Alpha v2.0 Launch and Rewards Program"
        icon={<CryptoIcon icon="aave" />}
        done
      />
      <Milestone
        date="January 2021"
        name="Audit Phase and Beta Mainnet Release"
        icon={<FaFileContract />}
        done
      />
      <Milestone
        date="February 2021"
        name="Seed Round"
        icon={<AiOutlineRise />}
        done
      />
      <Milestone
        date="May 2021"
        name="$APW Release"
        icon={<CryptoIcon icon="apwine" />}
        done
      />
      <Milestone
        date="Q2 2021"
        name="New Audits and V1 Mainnet Release"
        icon={<FaStar />}
      />
      <Milestone
        date="Q3 2021"
        name="Governance handed to community, expansion and integration with partner platforms"
        icon={<RiGovernmentFill />}
      />
    </VerticalTimeline>
  </div>
)

export default Roadmap
