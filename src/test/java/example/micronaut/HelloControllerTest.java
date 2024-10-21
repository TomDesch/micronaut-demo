package example.micronaut;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import io.micronaut.http.HttpRequest;
import io.micronaut.http.MediaType;
import io.micronaut.http.client.HttpClient;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.test.extensions.junit5.annotation.MicronautTest;
import jakarta.inject.Inject;
import org.junit.jupiter.api.Test;

@MicronautTest
class HelloControllerTest {


    private static final String BASE_URI = "/hello";
    @Inject
    @Client("/")
    HttpClient httpClient;

    @Test
    public void testHello() {
        HttpRequest<?> request = HttpRequest.GET(BASE_URI).accept(MediaType.TEXT_PLAIN);
        String body = httpClient.toBlocking().retrieve(request);

        assertNotNull(body);
        assertEquals("Hello world!", body);
    }
}