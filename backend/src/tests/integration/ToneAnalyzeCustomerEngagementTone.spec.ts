import request from "supertest";
import app from "../../app";

describe("TONE ANALYZER", () => {
  test("Use the customer-engagement endpoint to analyze the tone of customer service and customer support conversations.", async () => {
    const response = await request(app)
      .post("/tone/v1/chat")
      .send({
        chat: [
          {
            text: "Hello, I'm having a problem with your product.",
            user: "customer",
          },
          {
            text: "OK, let me know what's going on, please.",
            user: "agent",
          },
          {
            text: "Well, nothing is working :(",
            user: "customer",
          },
          {
            text: "Sorry to hear that.",
            user: "agent",
          },
        ],
      });
    expect(response.status).toBe(200);
  });
});
