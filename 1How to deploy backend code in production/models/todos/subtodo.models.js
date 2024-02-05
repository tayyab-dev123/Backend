import moongoose from "mongoose";

const subTodoSchema = new moongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdby: {
      type: moongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const SubTodo = moongoose.model("SubTodo", subTodoSchema);
