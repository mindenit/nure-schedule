import { TEvent } from "@onetools/calendar";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Card } from "components/ui/Card";
import { adaptTeacher } from "core/types/data.types";
import { TModifiedSchedule } from "core/types/events.types";
import { SubjectType } from "core/types/ui.types";
import { getSubjectType } from "core/utils/getSubjectType";
import { ElementRef, forwardRef } from "react";

interface SubjectAccordionProps
    extends AccordionPrimitive.AccordionMultipleProps {
    event: TEvent<TModifiedSchedule>;
    day: string;
    weekday: string;
    month: string;
    year: string;
}

export const SubjectAccordion = forwardRef<
    ElementRef<typeof AccordionPrimitive.Root>,
    SubjectAccordionProps
>(({ event, day, weekday, month, year, ...props }, ref) => {
    return (
        <AccordionPrimitive.Root
            ref={ref}
            {...props}
            type="multiple"
            style={{ display: "flex", width: "100%" }}
        >
            <AccordionPrimitive.Item
                value={String(event.id)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "1rem",
                }}
            >
                <AccordionPrimitive.Trigger asChild>
                    <Card
                        cardType="subject"
                        id={String(event.id)}
                        isFullWidth
                        startTime={event.startTime}
                        endTime={event.endTime}
                        auditory={event.auditory}
                        type={event.type as SubjectType}
                        subjectBrief={event.subject.brief}
                        subjectName={event.subject.brief}
                    />
                </AccordionPrimitive.Trigger>
                <AccordionPrimitive.Content asChild>
                    <Card
                        cardType="subjectText"
                        id={String(event.id)}
                        weekday={weekday}
                        date={`${day}.${month}.${year}`}
                        startTime={event.startTime}
                        subjectType={getSubjectType(event.type as SubjectType)}
                        subjectName={event.subject.title}
                        auditory={event.auditory}
                        teacher={event.teachers.map(adaptTeacher)}
                        groups={event.groups}
                    />
                </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
        </AccordionPrimitive.Root>
    );
});
