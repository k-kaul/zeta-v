import {
  Timeline,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"

const items = [
  {
    id: 1,
    date: "2017",
    title: "Founded in Hong Kong",
  },
  {
    id: 2,
    date: "2018",
    title: "IT Corridors in China",
  },
  {
    id: 3,
    date: "2019",
    title: "Digital Platform Launched",
  },
  {
    id: 4,
    date: "2020",
    title: "India Sourcing Operations",
  },
  {
    id: 5,
    date: "2021",
    title: "USA & Germany Operations",
  },
  {
    id: 6,
    date: "2022",
    title: "SAP & Zoho CoE",
  },
  {
    id: 7,
    date: "2023",
    title: "India Offshore Center",
  },
  {
    id: 8,
    date: "2024",
    title: "Microsoft & Telco-lot CoE",
  },
]

export default function Component() {
  return (
    <Timeline defaultValue={3} orientation="horizontal">
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
