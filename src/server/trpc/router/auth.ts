import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  getProfile: protectedProcedure.query(() => {
    return {
      id: 1,
      name: "Harry",
      surname: "Potter",
      location: "London, UK",
      email: "harry.potter@email.com",
      phone: "+1 034 356 134",
      candidate: {
        id: 1,
        expectedRole: "Software Engineer",
        expectedSalary: {
          value: "5000",
          currency: "US",
          per: "month",
        },
        about:
          "I am a software engineer with over 5 years of experience. I have worked on many projects and I am looking for a new challenge. I am a fast learner and I am always looking for new technologies to learn. I am a team player and I am always ready to help my colleagues.",
      },
      offers: [
        {
          id: 1,
          title: "Senior Software Engineer",
          company: "Apple",
          location: "Mountain View, CA",
          salary: {
            value: "400_000",
            currency: "US",
            per: "year",
          },
          description:
            "We are looking for a senior software engineer with at least 5 years of experience. You will be working on a new project and you will be responsible for the development of the backend.",
          status: "pending",
        },
      ],
    };
  }),
});
