window.BENCHMARK_DATA = {
  "lastUpdate": 1605998320293,
  "repoUrl": "https://github.com/mzabaluev/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/mzabaluev/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605998316138,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 810,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12086,
            "range": "± 3345",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 834,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12536,
            "range": "± 4526",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 456,
            "range": "± 79",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/mzabaluev/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605998319451,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14798,
            "range": "± 5728",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1083,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 644,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13971,
            "range": "± 2462",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1078,
            "range": "± 95",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}