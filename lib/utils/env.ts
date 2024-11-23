/* Validate an environment variable */
export const validateEnvVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable "${name}" is not defined.`);
  }
  return value;
};
