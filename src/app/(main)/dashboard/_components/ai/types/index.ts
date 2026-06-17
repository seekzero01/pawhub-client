export interface SuggestedQuery {
    id: string;
    label: string;
}

export interface DynamicInsightPayload {
    id: string;
    assistantName: string;
    viewActionUrl: string;
    alertTypeLabel: string;
    alertTitle: string;
    alertDescription: string;
    callToActionLabel: string;
    suggestedQueries: SuggestedQuery[];
}

export const MOCK_PAWBOT_INSIGHT: DynamicInsightPayload = {
    id: "insight_01e2w98b",
    assistantName: "PawBot Assistant",
    viewActionUrl: "/assistant/pawbot",
    alertTypeLabel: "VACCINATION REMINDER",
    alertTitle: "Max's rabies vaccination",
    alertDescription: "Expires in 24 days. Ensuring Max stays up to date prevents legal issues and keeps him safe.",
    callToActionLabel: "Schedule a vet appointment this month",
    suggestedQueries: [
        { id: "q1", label: "Is this urgent?" },
        { id: "q2", label: "Show vaccine history" },
        { id: "q3", label: "What should I prepare?" }
    ]
};