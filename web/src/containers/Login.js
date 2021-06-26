import { Wrapper } from "../components/Wrapper";
import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";

function Login() {
  return (
    <Wrapper variant="small">
      <Box shadow="md" borderWidth="1px" borderRadius="md" p={5}>
        <Formik
          initialValues={{ usernameOrEmail: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
            // logic for firebase auth
            // const response = await login(values);
            // if (response.data?.login.errors) {
            // 	setErrors(toErrorMap(response.data.login.errors));
            // } else if (!response.data?.login.errors) {
            // 	router.push("/");
            // }
            // return response;
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="email" placeholder="email" label="Email" />
              <Box mt={3}>
                <InputField
                  name="password"
                  placeholder="password"
                  label="Password"
                  type="password"
                />
              </Box>
              <Button
                type="submit"
                colorScheme="teal"
                isLoading={isSubmitting}
                mt={4}
              >
                login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
			<Box mt={3} ml={5}>
				Don't have an account yet? <b>Register here</b>
			</Box>
    </Wrapper>
  );
}

export default Login;
