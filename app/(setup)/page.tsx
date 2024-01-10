import { redirect } from "next/navigation";

import { initialProfile } from "@/lib/inital-profile";
import { db } from "@/lib/db";
import InitialModal from "../../components/modals/initialmodal";

const SetupPage = async () => {
    const profile = await initialProfile();

    const server = await db.server.findFirst({
        where : {
            members : {
                some : {
                    profileId : profile?.id
                }
            
            }
        }
    });

    // If the user is already in a server, redirect them to that server
    if(server) {
        return redirect(`/server/${server.id}`);
    }

    return (
        <div>
            <InitialModal />
        </div>
    )
}

export default SetupPage;