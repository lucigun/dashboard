import { trace } from '@opentelemetry/api';

export default async function handler(req, res) {
  // Create a new span
  const span = trace.getTracer('nextjs-opentelemetry-app').startSpan('telemetry-test-api-route');

  try {
    // Simulate some work
    await new Promise(resolve => setTimeout(resolve, 100));

    // Set some attributes on the span
    span.setAttribute('http.method', req.method);
    span.setAttribute('http.url', req.url);

    // Add an event to the span
    span.addEvent('Simulated work complete');

    res.status(200).json({ message: 'Telemetry test complete. Check your OTLP collector for trace data.' });
  } catch (error) {
    // Record any errors
    span.recordException(error);
    span.setStatus({ code: trace.SpanStatusCode.ERROR, message: error.message });
    res.status(500).json({ error: 'An error occurred during the telemetry test.' });
  } finally {
    // End the span
    span.end();
  }
}
