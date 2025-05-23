const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http');
const { OTLPLogExporter } = require('@opentelemetry/exporter-logs-otlp-http');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { FetchInstrumentation } = require('@opentelemetry/instrumentation-fetch');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

// Configure the SDK to export telemetry data to the console
// enable all auto-instrumentations from the meta package
const traceExporter = new OTLPTraceExporter({
  // optional - default url is http://localhost:4318/v1/traces
  //url: '<your-otlp-endpoint>/v1/traces',
  // optional - collection of custom headers to be sent with each request, e.g. authentication token
  //headers: {},
});
const metricExporter = new OTLPMetricExporter({
  // optional - default url is http://localhost:4318/v1/metrics
  //url: '<your-otlp-endpoint>/v1/metrics',
  // optional - collection of custom headers to be sent with each request, e.g. authentication token
  //headers: {},
});
const logExporter = new OTLPLogExporter({
  // optional - default url is http://localhost:4318/v1/logs
  //url: '<your-otlp-endpoint>/v1/logs',
  // optional - collection of custom headers to be sent with each request, e.g. authentication token
  //headers: {},
});

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'nextjs-opentelemetry-app',
    [SemanticResourceAttributes.SERVICE_VERSION]: '0.1.0',
  }),
  traceExporter,
  metricExporter,
  logExporter,
  instrumentations: [
    new HttpInstrumentation(),
    new FetchInstrumentation()
  ]
});

sdk.start();
