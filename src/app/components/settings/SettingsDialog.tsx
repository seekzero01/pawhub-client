"use client"

import {Tabs, TabsContent, TabsList} from "@/components/ui/tabs"
import {SettingsDialogSidebar} from "@/src/app/components/settings/SettingsDialogSidebar";
import AccountTab from "@/src/app/components/settings/tabs/AccountTab";
import GeneralTab from "@/src/app/components/settings/tabs/GeneralTab";
import SecurityTab from "@/src/app/components/settings/tabs/SecurityTab";
import BillingTab from "@/src/app/components/settings/tabs/BillingTab";
import PersonalizationTab from "@/src/app/components/settings/tabs/PersonalizationTab";

type SettingsDialogProps = {
    user: {
        name: string
        email: string
        avatarUrl?: string
    }
}

export const SettingsDialog = ({
                                   user,
                               }: SettingsDialogProps) => (
        <div className="p-1">
            <Tabs
                defaultValue="account"
                orientation="vertical"
                className="flex h-full"
            >
                <aside className="w-65 shrink-0 bg-cloud-canvas">
                    <SettingsDialogSidebar user={user} />
                </aside>
                <main className="overflow-y-auto p-8">
                    <TabsList>
                        <TabsContent value="account" className="mt-0 focus-visible:outline-none">
                            <AccountTab user={user}/>
                        </TabsContent>
                        <TabsContent value="general" className="mt-0 focus-visible:outline-none">
                            <GeneralTab />
                        </TabsContent>
                        <TabsContent value="security" className="mt-0 focus-visible:outline-none">
                            <SecurityTab />
                        </TabsContent>
                        <TabsContent value="billing" className="mt-0">
                            <BillingTab />
                        </TabsContent>
                        <TabsContent value="personalization" className="mt-0">
                            <PersonalizationTab />
                        </TabsContent>
                    </TabsList>
                </main>
            </Tabs>
        </div>
)