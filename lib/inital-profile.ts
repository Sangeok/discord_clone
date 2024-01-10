import {currentUser, redirectToSignIn} from "@clerk/nextjs";

import {db} from "@/lib/db";

export const initialProfile = async () => {
    const user = await currentUser();

    console.log(user?.firstName);

    // user가 없으면 로그인 페이지로 리다이렉트
    if (!user) {
        await redirectToSignIn();
        return;
    }

    const profile = await db.profile.findUnique({
        where: {
            userId: user.id,
        },
    });
    
    if(profile) {
        return profile;
    }

    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl : user.imageUrl,
            email : user.emailAddresses[0].emailAddress,
        },
    });

    return newProfile;
} 